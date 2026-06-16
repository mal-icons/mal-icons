import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-gastroenterology",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssGastroenterology {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-80v-240q0-46 32.08-78 32.08-32 77.92-32h80q75 0 102.5-33t27.5-77q0-32-17.25-51T380-610q-24.75 0-42.37-17.62T320-670v-210h60v210q2 0 0 0 50 0 85 36.5t35 93.5q0 69-45 119.5T310-370h-80q-21.25 0-35.62 14.38T180-320v240h-60Zm240 0h-60v-80q0-46 32.08-78 32.08-32 77.92-32h160q88 0 149-61t61-149v-40q0-88-66-149t-154-61q-24.75 0-42.37-17.62T500-790v-90h60v90q112 0 196 79t84 191v40q0 112-79 191t-191 79H410q-21.25 0-35.62 14.38T360-160v80Zm-180 0v-240q0-21.25 14.38-35.62T230-370h80q100 0 145-50.5T500-540q0-57-35-93.5T377-670l3-210-3 210q53 0 88 36.5t35 93.5q0 69-45 119.5T310-370h-80q-21.25 0-35.62 14.38T180-320v240Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssGastroenterology;
