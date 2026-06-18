import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-unraid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiUnraid {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.41 8.53h1.17v6.93h-1.17zM1.17 15.45H0V8.53h1.17zm4.530.83h1.17v2.65h-1.17zm-2.86-2.97h1.17v4.28h-1.17zm5.7 0h1.17v4.28h-1.17zM22.83 8.53H24v6.93h-1.17zm-4.53-0.81h-1.17V5.07h1.17zm2.86 2.95h-1.17V6.41h1.17zm-5.72 0h-1.17V6.41h1.17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiUnraid;
