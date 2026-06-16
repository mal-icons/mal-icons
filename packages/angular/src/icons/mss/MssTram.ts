import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-tram",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssTram {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M160-260v-394q0-90 70.5-119T449-804l32-66H280v-50h400v50H541l-30 66q126 2 207.5 30.5T800-654v394q0 59-40.5 99.5T660-120l60 60v20h-70l-80-80H390l-80 80h-70v-20l60-60q-59 0-99.5-40.5T160-260Zm505-154H220h519-74ZM483-244q23 0 39-16t16-39q0-23-16-39t-39-16q-23 0-39 16t-16 39q0 23 16 39t39 16Zm-2-445h251-509 258ZM220-474h519v-155H220v155Zm74 290h371q32 0 53-22t21-54v-154H220v154q0 32 21.5 54t52.5 22Zm187-560q-123 0-185.5 14.5T223-689h509q-10-20-70.5-37.5T481-744Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssTram;
