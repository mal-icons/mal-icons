import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-forum",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrForum {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M281-240q-14 0-27.5-14T240-282v-98h500v-340h100q14 0 27 14t13 29v524q0 20-18.5 27.5T829-132L721-240H281Zm-41-200L131-331q-14 14-32.5 6.5T80-352v-486q0-14 13-28t27-14h519q15 0 28 13.5t13 28.5v356q0 14-13 28t-28 14H240Zm380-60v-320H140v320h480Zm-480 0v-320 320Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrForum;
