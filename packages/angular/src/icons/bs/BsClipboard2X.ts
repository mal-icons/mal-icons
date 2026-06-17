import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-clipboard2-x",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsClipboard2X {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.5 0a0.50.5 0 0 1 0.50.50.50.5 0 0 0 0.50.50.50.5 0 0 1 0.50.5V2a0.50.5 0 0 1-0.50.5h-5A0.50.5 0 0 1 5 2v-0.5a0.50.5 0 0 1 0.5-0.50.50.5 0 0 0 0.5-0.50.50.5 0 0 1 0.5-0.5z"}],["path",{"d":"M3 2.5a0.50.5 0 0 1 0.5-0.5H4a0.50.5 0 0 0 0-1h-0.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a0.50.5 0 0 0 0 1h0.5a0.50.5 0 0 1 0.50.5v12a0.50.5 0 0 1-0.50.5h-9a0.50.5 0 0 1-0.5-0.5z"}],["path",{"d":"M8 8.29 6.85 7.15a0.50.5 0 1 0-0.710.71L7.29 9l-1.15 1.15a0.50.5 0 0 0 0.710.71L8 9.71l1.15 1.15a0.50.5 0 0 0 0.71-0.71L8.71 9l1.15-1.15a0.50.5 0 0 0-0.71-0.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsClipboard2X;
