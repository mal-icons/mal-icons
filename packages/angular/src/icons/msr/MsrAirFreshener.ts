import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-air-freshener",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAirFreshener {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-756q-17.42 0-29.21-11.79Q439-779.57 439-797t11.79-29.21Q462.58-838 480-838q17.43 0 29.21 11.79Q521-814.42 521-797t-11.79 29.21Q497.43-756 480-756Zm0-122q-17.42 0-29.21-11.79Q439-901.57 439-919t11.79-29.21Q462.58-960 480-960q17.43 0 29.21 11.79Q521-936.42 521-919t-11.79 29.21Q497.43-878 480-878ZM329-80q-59.76-36.4-93.38-97.7Q202-239 200-310q1-80 44.5-146.5T360-557v-129q0-12.75 8.63-21.37T390-716h180q12.75 0 21.38 8.63T600-686v129q72 35 115 101t45 146q-1 71-35 132t-94 98H329Zm18-60h266q41-30 64-74.35T700-310q0-60.99-32.5-112T580-499l-40-19v-138H420v138l-40 19q-55 26-87.5 77.13T260-309.6Q260-259 283-214.5t64 74.5Zm-67-698q-17.42 0-29.21-11.79Q239-861.57 239-879t11.79-29.21Q262.58-920 280-920q17.43 0 29.21 11.79Q321-896.42 321-879t-11.79 29.21Q297.43-838 280-838Zm400 0q-17.42 0-29.21-11.79Q639-861.57 639-879t11.79-29.21Q662.58-920 680-920t29.21 11.79Q721-896.42 721-879t-11.79 29.21Q697.43-838 680-838Zm-320 82q-17.42 0-29.21-11.79Q319-779.57 319-797t11.79-29.21Q342.58-838 360-838q17.43 0 29.21 11.79Q401-814.42 401-797t-11.79 29.21Q377.43-756 360-756Zm240 0q-17.42 0-29.21-11.79Q559-779.57 559-797t11.79-29.21Q582.58-838 600-838t29.21 11.79Q641-814.42 641-797t-11.79 29.21Q617.42-756 600-756ZM480-310Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAirFreshener;
