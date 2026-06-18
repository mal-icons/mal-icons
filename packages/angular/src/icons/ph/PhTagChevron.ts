import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-tag-chevron",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhTagChevron {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M237.3,119.12l-42.66-64A16,16,0,0,0,181.33,48H24a8,8,0,0,0-6.58,12.55L64,128,17.42,195.45A8,8,0,0,0,24,208H181.33a16,16,0,0,0,13.31-7.12l42.66-64A16,16,0,0,0,237.3,119.12Zm-56,72.88H39.25l38-55,0.08-0.1a16,16,0,0,0,0-17.76l-0.08-0.1-38-55H181.33L224,128Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhTagChevron;
