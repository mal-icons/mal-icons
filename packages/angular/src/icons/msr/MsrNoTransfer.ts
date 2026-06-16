import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-no-transfer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrNoTransfer {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M812-63 660-215h85v52q0 17.75-12.39 30.37Q720.22-120 702-120q-18.16 0-31.08-12.92Q658-145.84 658-164v-38H302v39q0 17.92-12.56 30.46Q276.88-120 258.94-120 241-120 228.5-132.54 216-145.08 216-163v-68q-29-16-42.5-46T160-341v-373.1L47-827q-9-9.07-8.5-21.53Q39-861 48.05-870q9.05-9 21.5-9Q82-879 91-870l764 765q9 9 9 21t-9.21 21q-9.21 9-21.5 9Q821-54 812-63ZM302-262h310L403-471H220v120q0 35 23.5 62t58.5 27Zm478-4-40-40v-165H575l-60-60h225v-173H342l-60-60h458q-24-26-92-41t-167-15q-85 0-140.5 7T254-792l-41-41q38-24 104-35.5T481-880q166 0 242.5 34T800-738v397q0 19.81-5 38.9Q790-283 780-266Zm-453.94-46Q349-312 365-328.06q16-16.06 16-39T364.94-406q-16.06-16-39-16T287-405.94q-16 16.06-16 39T287.06-328q16.06 16 39 16ZM220-531h123L220-654v123Zm62-233h458-458Zm121 293Zm172 0h165-165Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrNoTransfer;
