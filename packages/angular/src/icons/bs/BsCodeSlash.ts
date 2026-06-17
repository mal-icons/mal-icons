import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-code-slash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCodeSlash {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.48 1.65a0.50.5 0 1 0-0.96-0.29l-4 13a0.50.5 0 0 0 0.960.29zM4.85 4.15a0.50.5 0 0 1 0 0.71L1.71 8l3.15 3.15a0.50.5 0 0 1-0.710.71l-3.5-3.5a0.50.5 0 0 1 0-0.71l3.5-3.5a0.50.5 0 0 1 0.71 0m6.29 0a0.50.5 0 0 0 0 0.71L14.29 8l-3.15 3.15a0.50.5 0 0 0 0.710.71l3.5-3.5a0.50.5 0 0 0 0-0.71l-3.5-3.5a0.50.5 0 0 0-0.71 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCodeSlash;
