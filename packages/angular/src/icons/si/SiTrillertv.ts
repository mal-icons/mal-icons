import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-trillertv",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTrillertv {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m9.50.07-1.8 3.11-0.87-0.5c-1.27-0.73-2.850.18-2.85 1.64v6.28l3.9-6.73L9.930.32a0.140.14 0 0 0-0.05-0.19l-0.19-0.11a0.140.14 0 0 0-0.190.05Zm-0.71 3.73-4.81 8.3v7.16c0 0.670.34 1.230.83 1.56l-1.65 2.85a0.140.14 0 0 0 0.050.19l0.190.11a0.140.14 0 0 0 0.19-0.05l1.67-2.87L13.63 6.59Zm11.63 2.55-1.8 3.11-4.33-2.49-8.22 14.19a1.91 1.91 0 0 0 0.76-0.25l8.6-4.95 5.42-9.36a0.140.14 0 0 0-0.05-0.19c-0.06-0.04-0.13-0.07-0.19-0.11-0.03-0.02-0.14-0.04-0.190.05zm-0.71 3.74-2.97 5.12 3.08-1.77c1.27-0.73 1.27-2.56 0-3.28z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTrillertv;
