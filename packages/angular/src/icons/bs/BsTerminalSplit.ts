import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-terminal-split",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTerminalSplit {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.15 3.15a0.50.5 0 0 1 0.71 0l0.820.82a0.750.75 0 0 1 0 1.06l-0.820.82a0.50.5 0 1 1-0.71-0.71l0.65-0.65-0.65-0.65a0.50.5 0 0 1 0-0.71M4 6a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0 1h-1A0.50.5 0 0 1 4 6m6.35-2.85a0.50.5 0 0 0-0.710.71l0.650.65-0.650.65a0.50.5 0 1 0 0.710.71l0.82-0.82a0.750.75 0 0 0 0-1.06zM12 5.5a0.50.5 0 0 0 0 1h1a0.50.5 0 0 0 0-1z"}],["path",{"d":"M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.5V2zm6.5 0v12H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTerminalSplit;
