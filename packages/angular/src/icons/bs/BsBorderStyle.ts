import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-border-style",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBorderStyle {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 3.5a0.50.5 0 0 1 0.5-0.5h13a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-13a0.50.5 0 0 1-0.5-0.5zm0 4a0.50.5 0 0 1 0.5-0.5h5a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-5a0.50.5 0 0 1-0.5-0.5zm0 4a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.5-0.5zm8 0a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.5-0.5zm-4 0a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.5-0.5zm8 0a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-1a0.50.5 0 0 1-0.5-0.5zm-4-4a0.50.5 0 0 1 0.5-0.5h5a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-5a0.50.5 0 0 1-0.5-0.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBorderStyle;
