import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-severe-cold",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSevereCold {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M810-570q-12 0-21-9t-9-21q0-13 9-21.5t21-8.5q13 0 21.5 8.5T840-600q0 12-8.5 21t-21.5 9ZM400-80v-158L286-124l-42-42 156-156v-78h-78L166-244l-42-42 114-114H80v-60h158L124-574l42-42 156 156h78v-78L244-694l42-42 114 114v-158h60v158l114-114 42 42-156 156v78h320v60H622l114 114-42 42-156-156h-78v78l156 156-42 42-114-114v158h-60Zm380-610v-190h60v190h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSevereCold;
