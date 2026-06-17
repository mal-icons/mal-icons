import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-plus-slash-minus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPlusSlashMinus {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"m1.85 14.85 13-13a0.50.5 0 0 0-0.71-0.71l-13 13a0.50.5 0 0 0 0.710.71M4 1a0.50.5 0 0 1 0.50.5v2h2a0.50.5 0 0 1 0 1h-2v2a0.50.5 0 0 1-1 0v-2h-2a0.50.5 0 0 1 0-1h2v-2A0.50.5 0 0 1 4 1m5 11a0.50.5 0 0 1 0.5-0.5h5a0.50.5 0 0 1 0 1h-5A0.50.5 0 0 1 9 12"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPlusSlashMinus;
