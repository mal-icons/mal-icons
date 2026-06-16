import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-bookmark-manager",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrBookmarkManager {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M141-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h255q12.44 0 23.72 5t19.37 13.09L481-740h340q24 0 42 18t18 42v156q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T821-524v-156H141v460h344q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T485-160H141Zm610-203 28 28-164 164v51h51l164-164 28 28L700-98q-8 8-19.28 13-11.28 5-23.72 5h-52q-12.75 0-21.37-8.62T575-110v-52q0-12.44 5-23.72T593-205l158-158Zm107 107L751-363l61-61q9-9 21-9t21 9l65 65q9 9 9 21t-9 21l-61 61ZM141-680v468-468Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrBookmarkManager;
