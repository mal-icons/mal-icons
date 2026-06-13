import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-voicemail",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiVoicemail {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.43,7.5a4.5,4.5,0,0,0-2.82,8H9.39a4.49,4.49,0,1,0-2.82,1h10.87a4.5,4.5,0,0,0,0-9ZM3.07,12a3.5,3.5,0,1,1,3.56,3.5h-0.06A3.5,3.5,0,0,1,3.07,12Zm14.37,3.5h-0.06a3.53,3.53,0,1,1,0.06,0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiVoicemail;
