import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-shield-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiShieldDisabled {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M486 68.13L68.13 486 26 443.88 443.88 26zM256 21.61S185.51 66.9 81.86 66.9V292.55a148.34 148.34 0 0 0 11.67 57.57L380.85 62.81C311.19 51.67 256 21.61 256 21.61zm0 468.78s174.14-65.93 174.14-197.84V150.21L152.62 427.73C200.84 469.51 256 490.39 256 490.39z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiShieldDisabled;
