import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-indigo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiIndigo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.99 0c-0.25 0-0.50.1-0.690.29a0.980.98 0 0 0 0 1.390.980.98 0 0 0 1.38 0 0.980.98 0 0 0 0-1.39A0.980.98 0 0 0 22.99 0Zm-2.44 1.96c-0.25 0-0.50.1-0.690.29a0.980.98 0 0 0 0 1.390.980.98 0 0 0 1.38 0 0.980.98 0 0 0-0.69-1.67ZM6.38 4.41a0.980.98 0 0 0 0 1.960.980.98 0 0 0 0-1.96Zm2.93 0a0.980.98 0 0 0 0 1.960.980.98 0 1 0 0-1.96Zm3.42 0a0.980.98 0 0 0 0 1.960.980.98 0 0 0 0-1.96Zm2.93 0a0.980.98 0 0 0 0 1.960.980.98 0 0 0 0-1.96Zm2.93 0a0.980.98 0 1 00 1.960.980.98 0 0 0 0-1.96Zm-2.93 2.94a0.980.98 0 0 0 0 1.960.980.98 0 0 0 0-1.96Zm2.93 0a0.980.98 0 0 0 0 1.960.980.98 0 0 0 0.98-0.980.980.98 0 0 0-0.98-0.98Zm-5.37 1.96a0.970.97 0 0 0-0.690.290.980.98 0 0 0 1.38 1.390.980.98 0 0 0-0.69-1.67Zm5.370.98a0.980.98 0 0 0 0 1.960.980.98 0 0 0 0-1.96Zm-7.33 1.47a0.980.98 0 0 0 0 1.960.980.98 0 0 0 0-1.96Zm7.33 1.47a0.980.98 0 0 0 0 1.960.980.98 0 0 0 0-1.96Zm-9.280.49a0.980.98 0 0 0-0.69 1.670.980.98 0 0 0 1.38 0 0.980.98 0 0 0-0.69-1.67Zm-8.3 2.45a0.980.98 0 1 0 0 1.960.980.98 0 0 00-1.96Zm2.93 0a0.980.98 0 1 0 0 1.960.980.98 0 0 00-1.96Zm2.93 0a0.980.98 0 0 0 0 1.960.980.98 0 0 0 0-1.96Zm11.720.49a0.980.98 0 0 0 0 1.960.980.98 0 0 0 0-1.96Zm-11.72 2.45a0.980.98 0 0 0 0 1.960.980.98 0 0 0 0-1.96Zm0 2.94a0.980.98 0 0 0 0 1.960.980.98 0 0 0 0-1.96Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiIndigo;
