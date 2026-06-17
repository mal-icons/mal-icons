import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-clipboard2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsClipboard2 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.5 2a0.50.5 0 0 0-0.50.5v12a0.50.5 0 0 0 0.50.5h9a0.50.5 0 0 0 0.5-0.5v-12a0.50.5 0 0 0-0.5-0.5H12a0.50.5 0 0 1 0-1h0.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a0.50.5 0 0 1 0 1z"}],["path",{"d":"M10 0.5a0.50.5 0 0 0-0.5-0.5h-3a0.50.5 0 0 0-0.50.50.50.5 0 0 1-0.50.50.50.5 0 0 0-0.50.5V2a0.50.5 0 0 0 0.50.5h5A0.50.5 0 0 0 11 2v-0.5a0.50.5 0 0 0-0.5-0.50.50.5 0 0 1-0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsClipboard2;
