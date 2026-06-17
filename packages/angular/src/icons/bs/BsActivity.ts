import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-activity",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsActivity {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M6 2a0.50.5 0 0 1 0.470.33L10 12.04l1.53-4.21A0.50.5 0 0 1 12 7.5h3.5a0.50.5 0 0 1 0 1h-3.15l-1.88 5.17a0.50.5 0 0 1-0.94 0L6 3.96 4.47 8.17A0.50.5 0 0 1 4 8.5H0.5a0.50.5 0 0 1 0-1h3.15l1.88-5.17A0.50.5 0 0 1 6 2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsActivity;
