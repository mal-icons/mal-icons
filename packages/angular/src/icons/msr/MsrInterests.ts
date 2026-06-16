import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-interests",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrInterests {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M131-520q-17 0-25.5-15t-0.5-30l149-268q5-8 11.53-11.5t14.5-3.5q7.98 0 14.48 3.5T306-833l149 268q8 15-0.5 30T429-520H131Zm150 400q-66 0-113-47t-47-113q0-67 47-113.5T281-440q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-99-400h196l-98-176-98 176Zm368 460q-12.75 0-21.37-8.62T520-150v-260q0-12.75 8.63-21.37T550-440h260q12.75 0 21.38 8.63T840-410v260q0 12.75-8.62 21.38T810-120H550Zm30-60h200v-200H580v200Zm99.82-360Q674-540 668-541.5t-11-5.5q-60-44-95-75t-53.5-54Q490-699 485-717t-5-36q0-45 31.5-76t78.5-31q26 0 50 12t40 35q16-23 40-35t50-12q47 0 78.5 31t31.5 76q0 18-5 36t-23.5 41Q833-653 798-622t-95 75q-5 4-11.18 5.5t-12 1.5Zm0.18-59q85-70 112.5-100t27.5-52q0-21.97-12.86-35.48Q794.29-800 772-800q-13.1 0-25.55 7Q734-786 715-769l-35 33-35-33q-18.67-17.36-31.33-24.18Q601-800 588-800q-22.29 0-35.14 13.52T540-751q0 22 27.5 52T680-599Zm0-101Zm-400 32Zm1 388Zm399 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrInterests;
