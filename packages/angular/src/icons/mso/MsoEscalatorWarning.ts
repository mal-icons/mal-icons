import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-escalator-warning",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoEscalatorWarning {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M260.08-727q-30.08 0-51.58-21.42-21.5-21.42-21.5-51.5 0-30.08 21.42-51.58 21.42-21.5 51.5-21.5 30.08 0 51.58 21.42 21.5 21.42 21.5 51.5 0 30.08-21.42 51.58-21.42 21.5-51.5 21.5ZM695-500q-25 0-42.5-17.5T635-560q0-25 17.5-42.5T695-620q25 0 42.5 17.5T755-560q0 25-17.5 42.5T695-500ZM190-80v-290h-70v-250q0-24.75 17.63-42.37T180-680h152q17.45 0 31.72 9T386-646l136 278 73-78q6-7 14.36-10.5T627-460h129q18.33 0 31.17 12.83Q800-434.33 800-416v166h-50v170H610v-303l-59 63h-70L350-583v503H190Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoEscalatorWarning;
