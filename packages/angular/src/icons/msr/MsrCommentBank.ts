import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-comment-bank",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCommentBank {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M240-240 131-131q-14 14-32.5 6.34T80-152v-668q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H240Zm283-580H140v520h680v-520H716v248q0 8-7 13t-15 1l-64-34q-5.45-2-10.23-2-4.77 0-9.77 2l-65 34q-8 4-15-1t-7-13v-248ZM140-300v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCommentBank;
