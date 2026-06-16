import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-article",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrArticle {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M307-279h215q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T522-339H307q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T307-279Zm0-171h346q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T653-510H307q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T307-450Zm0-171h346q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T653-681H307q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T307-621ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrArticle;
