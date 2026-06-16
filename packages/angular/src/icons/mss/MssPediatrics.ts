import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-pediatrics",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPediatrics {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M290-700v-60h160v-120h60v120h160v60H290ZM280-80v-450q0-50 35-85t85-35h160q50 0 85 35t35 85v450H280Zm60-60h280v-390q0-25.5-17.25-42.75T560-590H400q-25.5 0-42.75 17.25T340-530v50h130v60H340v110h130v60H340v110Zm0 0v-450 450Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPediatrics;
