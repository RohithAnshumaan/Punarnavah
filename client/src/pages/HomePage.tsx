import { Button } from "../components/Button";
import { Dropdown } from "../components/Dropdown";
import { ImageUpload } from "../components/ImageUpload";
import { InputBox } from "../components/InputBox";
import { TextAreaBox } from "../components/TextAreaBox";
import { TextLink } from "../components/TextLink";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

export const HomePage = () => {
  return (
    <>
    <div className="h-10">
    </div>

    <Navbar />

    <Card name={"asdf"} description={"sdf asdf asdf aefew rgf aw asfd ewr wef awe fdasgif auygef aiueyg dayged ayged ywegd eywg fkjhasg"} image={""} linkText={""}/>

    <Dropdown label="Select a fruit" options={["Apple", "Banana", "Cherry"]} onChange={(e) => console.log(e.target.value)} />
    <ImageUpload onImageUpload={function (file: File | null): void {
              throw new Error("Function not implemented.");
          } }  />

    <TextAreaBox label="Password" onChange={(e) => console.log(e.target.value)} />

    <InputBox label="Email" type="email" onChange={(e) => console.log(e.target.value)} />
    <div className="ml-10">

        <TextLink text="Forgot Password?" linkTo="/forgot-password" />
        

    <Button text="Submit" onClick={(e) => console.log("Button clicked")} />
    </div>


      <div className="h-screen w-screen">
        {/* Hero component */}
        <div className="h-1/2 flex flex-col justify-center items-center">
          <div className="flex justify-between w-2/3 mb-10">
            <div>Home</div>
            <div>Signup</div>
          </div>
          <div className="font-limeLight text-9xl">PUNARNAVAH</div>
        </div>

        {/* Welcome msg and lottie animation */}
        <div className="h-1/2 bg-secondary flex justify-center gap-5">
          <div className="flex flex-col justify-center w-1/3">
            <div className="font-limeLight mb-5 text-4xl">
              Welcome to a Greener Global Future
            </div>
            <div className="text-white text-lg">
              Meet Punarnavah—your friendly neighborhood waste processor with a
              twist: We don't just dispose of it, we spin it into gold! No
              really, we're transforming waste into an economic opportunity.
              Pioneers in shaking up the circular economy, we connect
              communities, artisans, and industries in the never-ending cycle of
              waste upcycling.
            </div>
          </div>
          <div className="flex flex-col justify-center w-1/3">
          for lottie animation or logo
          
          </div>
        </div>
      </div>
    </>
  );
};
