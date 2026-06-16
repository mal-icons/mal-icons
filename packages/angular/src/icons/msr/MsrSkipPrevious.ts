import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-skip-previous",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSkipPrevious {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M250-240q-13 0-21.5-8.5T220-270v-420q0-13 8.5-21.5T250-720q13 0 21.5 8.5T280-690v420q0 13-8.5 21.5T250-240Zm443-33L430-455q-13-9-13-25t13-25l263-182q15-11 31-2.5t16 26.5v366q0 18-16 26.5t-31-2.5Zm-13-207Zm0 125v-250L499-480l181 125Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSkipPrevious;
