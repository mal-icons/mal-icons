import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-exposure",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsExposure {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.5 4a0.50.5 0 0 0-1 0v2h-2a0.50.5 0 0 0 0 1h2v2a0.50.5 0 0 0 1 0V7h2a0.50.5 0 0 0 0-1h-2zm-3 7a0.50.5 0 0 0 0 1h5a0.50.5 0 0 0 0-1z"}],["path",{"d":"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsExposure;
