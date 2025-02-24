import AccountSettings from '@/components/DashboardSettings/AccountSettings';
import PasswordSettings from '@/components/DashboardSettings/PasswordSettings';
import AddressSettings from '@/components/DashboardSettings/AddressSettings';

const Settings = () => {
  return (
    <section className="">
      {/* Account Settings */}
      <AccountSettings />
      {/* address Setting */}
      <AddressSettings />
      {/* Password Setting */}
      <PasswordSettings />
    </section>
  );
};

export default Settings;
