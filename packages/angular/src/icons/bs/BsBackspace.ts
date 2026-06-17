import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-backspace",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBackspace {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.83 5.15a0.50.5 0 0 0 0 0.71L7.98 8l-2.15 2.15a0.50.5 0 0 0 0.710.71l2.15-2.15 2.15 2.15a0.50.5 0 0 0 0.71-0.71L9.39 8l2.15-2.15a0.50.5 0 0 0-0.71-0.71L8.68 7.29 6.54 5.15a0.50.5 0 0 0-0.71 0z"}],["path",{"d":"M13.68 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.52-0.7L0.24 8.65a1 1 0 0 1 0-1.3L5.08 1.7A2 2 0 0 1 6.6 1zm-7.08 1a1 1 0 0 0-0.760.35L1 8l4.84 5.65a1 1 0 0 0 0.760.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBackspace;
