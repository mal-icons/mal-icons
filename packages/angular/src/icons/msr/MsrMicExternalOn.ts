import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-mic-external-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrMicExternalOn {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M184-692q-14-15-19-34t-5-39q0-47.92 33.25-81.46Q226.5-880 274-880t80.75 33.54Q388-812.92 388-765q0 20-5 39t-19 34H184ZM396-80q-63.94 0-109.47-45Q241-170 241-235h-20q-6 0-10.12-3.89T206-249l-36-369q-2-13.5 7.25-23.25T200-651h148q13.5 0 22.75 9.75T378-618l-36 369q-0.75 6.22-4.87 10.11Q333-235 327-235h-26q0 39 27.87 67 27.87 28 67 28Q435-140 462.5-167.91 490-195.81 490-235v-490q0-65 45-110t110-45q65 0 110 45t45 110v615q0 12.75-8.68 21.38Q782.65-80 769.83-80 757-80 748.5-88.62T740-110v-615q0-39.19-27.87-67.09-27.87-27.91-67-27.91Q606-820 578-792.09 550-764.19 550-725v490q0 65-45.24 110Q459.53-80 396-80ZM261-295h26l28-296h-82l28 296Zm26-296h-54 82-28Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrMicExternalOn;
