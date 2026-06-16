import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-high-density",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssHighDensity {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-120v-60h60v60h-60Zm148 0v-60h83v60h-83Zm171 0v-60h83v60h-83Zm170 0v-60h83v60h-83Zm171 0v-60h60v60h-60Zm0-148v-83h60v83h-60Zm0-171v-83h60v83h-60Zm0-170v-83h60v83h-60Zm0-171v-60h60v60h-60ZM120-268v-572h572v572H120Zm60-60h452v-452H180v452Zm0 0v-452 452Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssHighDensity;
