import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-happy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoHappy {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM184,208a24,24,0,1,1-24,24A23.94,23.94,0,0,1,184,208ZM351.67,314.17c-12,40.3-50.2,69.83-95.62,69.83s-83.62-29.53-95.72-69.83A8,8,0,0,1,168.16,304H343.85A8,8,0,0,1,351.67,314.17ZM328,256a24,24,0,1,1,24-24A23.94,23.94,0,0,1,328,256Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoHappy;
