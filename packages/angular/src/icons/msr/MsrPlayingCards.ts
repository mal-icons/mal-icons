import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-playing-cards",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrPlayingCards {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m610-409 29-105q2-9-1-18t-11-14l-90-62q-6-5-13.34-2.12Q516.32-607.23 514-599l-29 105q-2 9 1 18t11 14l90 62q6 5 13.34 2.12Q607.68-400.76 610-409ZM195-160l-66-27q-32.17-14.03-43.58-48.01Q74-269 92-302l103-245v387Zm142 58q-33.83 0-57.91-24Q255-150 255-184v-313l137 368q3 8 6.5 14t9.5 13h-71Zm183-25q-23 8-45.93-2.2Q451.14-139.41 443-162L251-684q-8-23 2.44-45.87Q263.88-752.75 287-761l319-115q23-8 46.5 2t31.5 33l193 521q8 23-2.2 45.88Q864.59-251.25 842-243L520-127Zm-20-57 318-116-191-519-318 115 191 520Zm64-318Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrPlayingCards;
