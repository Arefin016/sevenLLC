import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  billingAddressFormFunc,
  contactFormFunc,
  deletePaymentFunc,
  orderRequestFormFunc,
  passwordChangeFunc,
  userInformationUpdateFunc,
} from "./cms.api";
import useAuth from "./useAuth";
import toast from "react-hot-toast";
import { useGetAllPayments } from '@/hooks/cms.queries';

export const useContactMutation = () => {
  const { setLoading } = useAuth();
  return useMutation({
    mutationKey: ["contact-us"],
    mutationFn: payload => contactFormFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      setLoading(false);
      toast.success("Your message has been sent !", {
        duration: 1500,
      });
    },
    onError: error => {
      setLoading(false);
      toast.error(error.response?.data?.message, {
        duration: 1500,
      });
    },
  });
};
// This is billing address
export const useBillingAddressMutation = () => {
  const { setLoading } = useAuth();
  return useMutation({
    mutationKey: ["billing-address"],
    mutationFn: payload => billingAddressFormFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      setLoading(false);
      toast.success("Billing address has been sent !", {
        duration: 1500,
      });
    },
    onError: error => {
      setLoading(false);
      toast.error(error.response?.data?.message, {
        duration: 1500,
      });
    },
  });
};

// Order request submission form
export const useOrderRequestMutation = () => {
  const { setLoading } = useAuth();
  return useMutation({
    mutationKey: ["order-request"],
    mutationFn: payload => orderRequestFormFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      setLoading(false);
      toast.success("Order Request has been sent !", {
        duration: 1500,
      });
    },
    onError: error => {
      setLoading(false);
      toast.error(error.response?.data?.message, {
        duration: 1500,
      });
    },
  });
};

//user information update mutation:
export const useUserInfoUpdateMutation = () => {
  const { setLoading, setUserInfo } = useAuth();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["user-information-update"],
    mutationFn: payload => userInformationUpdateFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: data => {
      console.log(data);
      const userData = {
        name: data?.data?.first_name + " " + data?.data?.last_name,
        image: data?.data?.avatar,
      };
      setUserInfo(userData);
      queryClient.invalidateQueries(["user-info"]);
      toast.success("User information has been updated successfully!", {
        duration: 1500,
      });
      setLoading(false);
    },
    onError: () => {
      setLoading(false);
      toast.error("Error in user information update", {
        duration: 1500,
      });
    },
  });
};

// password change mutation:
export const usePasswordChangeMutation = () => {
  const { setLoading } = useAuth();
  return useMutation({
    mutationKey: ["password-change"],
    mutationFn: payload => passwordChangeFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      toast.success("Password has been changed successfully!", {
        duration: 1500,
      });
      setLoading(false);
    },
    onError: () => {
      setLoading(false);
      toast.error("Error in password change", {
        duration: 1500,
      });
    },
  });
};

// delete one payment:
export const useDeletePayment = () => {
  const queryClient = useQueryClient();

  // Use the hook to get the current payment data
  const { refetch } = useGetAllPayments();

  return useMutation({
    mutationKey: ["delete-payment"],
    mutationFn: id => deletePaymentFunc(id),
    onMutate: () => {},
    onSuccess: () => {
      toast.success("Payment deleted successfully!", {
        duration: 1500,
      });

      // Invalidate the queries to refetch
      queryClient.invalidateQueries("all-payments");

      // Explicitly trigger a refetch after the payment is deleted
      refetch();
    },
    onError: () => {
      toast.error("Error deleting payment", {
        duration: 1500,
      });
    },
  });
};
