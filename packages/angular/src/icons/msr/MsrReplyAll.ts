import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-reply-all",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrReplyAll {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M295-310 101-503q-5-5-7-10t-2-11q0-6 2-11t7-10l194-194q8-8 21-8.5t22 8.5q9 9 9 21.5t-9 21.5L166-524l172 172q8 8 8.5 20.5T338-310q-9 9-21.5 9t-21.5-9Zm554 110q-13 0-21.5-8.5T819-230v-126q0-60-39-99t-99-39H376l142 142q8 8 8 20.5t-9 21.5q-9 9-21.5 9t-21.5-9L281-503q-5-5-7-10t-2-11q0-6 2-11t7-10l194-194q8-8 21-8.5t22 8.5q9 9 9 21.5t-9 21.5L376-554h305q85 0 141.5 56.5T879-356v126q0 13-8.5 21.5T849-200Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrReplyAll;
