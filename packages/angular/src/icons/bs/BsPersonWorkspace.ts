import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-person-workspace",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPersonWorkspace {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"}],["path",{"d":"M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h0.65a5.4 5.4 0 0 1 1.07-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.22c0.550.650.89 1.37 1.07 2h0.65a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPersonWorkspace;
