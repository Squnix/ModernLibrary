export default function RegisterComponent({visible}: {visible: boolean}): React.ReactElement {
  return (
    <form className={visible ? "bg-yellow-200" : "hidden"}>
      <label>Username</label>
      <input type="text" id="name" name="name" />
      <label>Email</label>
      <input type="email" id="email" name="email" />
      <label>Password</label>
      <input type="password" name="password" />
    </form>
  );
}
