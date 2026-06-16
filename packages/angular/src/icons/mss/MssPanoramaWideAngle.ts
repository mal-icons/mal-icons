import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-panorama-wide-angle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPanoramaWideAngle {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-160q-91 0-181.5-8.5T120-200q-21-69-30.5-138.5T80-480q0-72 9.5-141.5T120-760q79-20 168-30t192-10q103 0 192 10t168 30q21 69 30.5 138.5T880-480q0 72-10 141.5T840-200q-88 23-178.5 31.5T480-160Zm0-320Zm0 260q80 0 157-6.5T792-250q14-56 21-114t7-116q0-58-7-116t-21-114q-69-15-146-22.5T480-740q-89 0-166 7.5T168-710q-14 56-21 114t-7 116q0 58 7 116t21 114q78 17 155 23.5t157 6.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPanoramaWideAngle;
