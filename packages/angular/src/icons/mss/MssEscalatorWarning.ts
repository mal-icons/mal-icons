import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-escalator-warning",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssEscalatorWarning {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M260.08-727q-30.08 0-51.58-21.42-21.5-21.42-21.5-51.5 0-30.08 21.42-51.58 21.42-21.5 51.5-21.5 30.08 0 51.58 21.42 21.5 21.42 21.5 51.5 0 30.08-21.42 51.58-21.42 21.5-51.5 21.5ZM695-500q-25 0-42.5-17.5T635-560q0-25 17.5-42.5T695-620q25 0 42.5 17.5T755-560q0 25-17.5 42.5T695-500ZM190-80v-290h-70v-310h249l153 312 86-92h192v210h-50v170H610v-303l-59 63h-70L350-583v503H190Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssEscalatorWarning;
