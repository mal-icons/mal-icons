import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-input",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrInput {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 3.01H3c-1.1 0-2 0.9-2 2V8c0 0.550.45 1 1 1s1-0.45 1-1V5.99c0-0.550.45-1 1-1h16c0.55 0 1 0.45 1 1v12.03c0 0.55-0.45 1-1 1H4c-0.55 0-1-0.45-1-1V16c0-0.55-0.45-1-1-1s-1 0.45-1 1v3.01c0 1.090.89 1.98 1.98 1.98H21c1.1 0 2-0.9 2-2V5.01c0-1.1-0.9-2-2-2zm-9.15 12.14 2.79-2.79c0.2-0.20.2-0.51 0-0.71l-2.79-2.79a0.50.5 0 0 0-0.850.35V11H2c-0.55 0-1 0.45-1 1s0.45 1 1 1h9v1.79c0 0.450.540.670.850.36z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrInput;
