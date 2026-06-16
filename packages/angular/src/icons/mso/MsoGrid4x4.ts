import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-grid-4x4",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoGrid4x4 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M215-80v-135H80v-60h135v-175H80v-60h135v-175H80v-60h135v-135h60v135h175v-135h60v135h175v-135h60v135h135v60H745v175h135v60H745v175h135v60H745v135h-60v-135H510v135h-60v-135H275v135h-60Zm60-195h175v-175H275v175Zm235 0h175v-175H510v175ZM275-510h175v-175H275v175Zm235 0h175v-175H510v175Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoGrid4x4;
