import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-stay-primary-portrait",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoStayPrimaryPortrait {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480.02-286Q466-286 456.5-295.48q-9.5-9.48-9.5-23.5 0-14.02 9.48-23.52 9.48-9.5 23.5-9.5 14.02 0 23.52 9.48 9.5 9.48 9.5 23.5 0 14.02-9.48 23.52-9.48 9.5-23.5 9.5ZM451-396v-268h60v268h-60ZM260-40q-24 0-42-18t-18-42v-760q0-24 18-42t42-18h440q24 0 42 18t18 42v760q0 24-18 42t-42 18H260Zm0-90v30h440v-30H260Zm0-60h440v-580H260v580Zm0-640h440v-30H260v30Zm0 0v-30 30Zm0 700v30-30Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoStayPrimaryPortrait;
