import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-flip",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFlip {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-120v-720h272v60H180v600h212v60H120Zm332 80v-880h60v880h-60Zm328-726v-14h-14v-60h74v74h-60Zm0 341v-110h60v110h-60Zm-14 305v-60h14v-14h60v74h-74Zm14-475v-111h60v111h-60Zm0 341v-111h60v111h-60ZM572-120v-60h134v60H572Zm0-660v-60h134v60H572Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFlip;
