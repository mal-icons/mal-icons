import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-do-not-touch",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDoNotTouch {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m840-206-60-60v-534h60v594ZM340-705l-60-60v-75h60v135Zm167 166-60-59v-322h60v381Zm167 59h-60v-400h60v400ZM375-100h399L340-534v252L166-410l209 310Zm-31 60L54-468l62-53 164 124v-197L26-848l43-43L916-44 873-1l-39-39H344Zm222-440Zm-9 163Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDoNotTouch;
