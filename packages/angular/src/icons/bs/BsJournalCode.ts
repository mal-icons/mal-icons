import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-journal-code",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsJournalCode {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M8.65 5.65a0.50.5 0 0 1 0.71 0l2 2a0.50.5 0 0 1 0 0.71l-2 2a0.50.5 0 0 1-0.71-0.71L10.29 8 8.65 6.35a0.50.5 0 0 1 0-0.71m-1.29 0a0.50.5 0 0 0-0.71 0l-2 2a0.50.5 0 0 0 0 0.71l2 2a0.50.5 0 0 0 0.71-0.71L5.71 8l1.65-1.65a0.50.5 0 0 0 0-0.71"}],["path",{"d":"M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"}],["path",{"d":"M1 5v-0.5a0.50.5 0 0 1 1 0V5h0.5a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1 0-1zm0 3v-0.5a0.50.5 0 0 1 1 0V8h0.5a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1 0-1zm0 3v-0.5a0.50.5 0 0 1 1 0v0.5h0.5a0.50.5 0 0 1 0 1h-2a0.50.5 0 0 1 0-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsJournalCode;
