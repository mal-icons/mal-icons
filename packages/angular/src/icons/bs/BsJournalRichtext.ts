import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-journal-richtext",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsJournalRichtext {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.5 3.75a0.750.75 0 1 1-1.5 0 0.750.75 0 0 1 1.5 0m-0.86 1.54 1.330.89 1.85-1.85a0.250.25 0 0 1 0.29-0.05L11 4.75V7a0.50.5 0 0 1-0.50.5h-5A0.50.5 0 0 1 5 7v-0.5s1.54-1.27 1.64-1.21M5 9.5a0.50.5 0 0 1 0.5-0.5h5a0.50.5 0 0 1 0 1h-5a0.50.5 0 0 1-0.5-0.5m0 2a0.50.5 0 0 1 0.5-0.5h2a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1-0.5-0.5"}],["path",{"d":"M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"}],["path",{"d":"M1 5v-0.5a0.50.5 0 0 1 1 0V5h0.5a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1 0-1zm0 3v-0.5a0.50.5 0 0 1 1 0V8h0.5a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1 0-1zm0 3v-0.5a0.50.5 0 0 1 1 0v0.5h0.5a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1 0-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsJournalRichtext;
