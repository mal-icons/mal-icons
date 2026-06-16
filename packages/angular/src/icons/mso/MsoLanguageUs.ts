import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-language-us",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoLanguageUs {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M220-280q-24 0-42-18t-18-42v-340h60v340h160v-340h60v340q0 24-18 42t-42 18H220Zm360 0q-24 0-42-18t-18-42v-40h60v40h160v-110H580q-24 0-42-18t-18-42v-110q0-24 18-42t42-18h160q24 0 42 18t18 42v40h-60v-40H580v110h160q24 0 42 18t18 42v110q0 24-18 42t-42 18H580Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoLanguageUs;
