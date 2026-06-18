import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-message-rounded-error",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxMessageRoundedError {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.49 2 2 5.59 2 10c0 2.91 1.9 5.52 5 6.93V22l5.34-4C17.7 17.85 22 14.32 22 10c0-4.41-4.49-8-10-8zm0 14h-0.33L9 18v-2.42l-0.64-0.25C5.67 14.3 4 12.26 4 10c0-3.31 3.59-6 8-6s8 2.69 8 6-3.59 6-8 6z"}],["path",{"d":"M11 6h2v5h-2zm0 6h2v2h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxMessageRoundedError;
