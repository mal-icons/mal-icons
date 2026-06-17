import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-chat-left-quote",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsChatLeftQuote {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.41A2 2 0 0 0 3 11.59l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.79a0.50.5 0 0 0 0.850.35l2.85-2.85A1 1 0 0 1 4.41 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"}],["path",{"d":"M7.07 4.76A1.67 1.67 0 0 0 4 5.67a1.67 1.67 0 0 0 2.56 1.41c-0.130.39-0.370.8-0.78 1.22a0.420.42 0 1 0 0.60.58c1.49-1.54 1.29-3.210.68-4.11zm4 0A1.67 1.67 0 0 0 8 5.67a1.67 1.67 0 0 0 2.56 1.41c-0.130.39-0.370.8-0.78 1.22a0.420.42 0 1 0 0.60.58c1.49-1.54 1.29-3.210.68-4.11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsChatLeftQuote;
