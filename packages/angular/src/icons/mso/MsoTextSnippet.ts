import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-text-snippet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoTextSnippet {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-180h600v-375L555-780H180v600Zm0 60q-24.75 0-42.37-17.62T120-180v-600q0-24.75 17.63-42.37T180-840h400l260 260v400q0 24.75-17.62 42.38T780-120H180Zm99-171h402v-60H279v60Zm0-159h402v-60H279v60Zm0-159h276v-60H279v60Zm-99 429v-600 600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoTextSnippet;
