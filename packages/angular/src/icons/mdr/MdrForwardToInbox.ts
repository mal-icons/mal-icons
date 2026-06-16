import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-forward-to-inbox",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrForwardToInbox {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 4H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h9v-2H4V8l6.94 4.34c0.650.41 1.470.41 2.12 0L20 8v5h2V6c0-1.1-0.9-2-2-2zm-8 7L4 6h16l-8 5zm7 5.21c0-0.450.54-0.670.85-0.35l2.79 2.79c0.20.20.20.51 0 0.71l-2.79 2.79a0.50.5 0 0 1-0.85-0.36V20h-3c-0.55 0-1-0.45-1-1s0.45-1 1-1h3v-1.79z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrForwardToInbox;
