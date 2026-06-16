import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-language-gb-english",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoLanguageGbEnglish {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M590-340h190v-110H590v110Zm0-170h190v-110H590v110ZM180-280q-24.75 0-42.37-17.62T120-340v-280q0-24.75 17.63-42.37T180-680h180q26 0 45.5 17t23.5 43H180v280h190v-110h-80v-60h140v170q0 24.75-17.62 42.38T370-280H180Zm350 0v-400h250q24.75 0 42.38 17.63T840-620v90q0 20-15 35t-35 15q20 0 35 15t15 35v90q0 24.75-17.62 42.38T780-280H530Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoLanguageGbEnglish;
