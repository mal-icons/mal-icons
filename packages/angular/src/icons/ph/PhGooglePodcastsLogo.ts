import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-google-podcasts-logo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhGooglePodcastsLogo {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M136,16V48a8,8,0,0,1-16,0V16a8,8,0,0,1,16,0Zm40,40a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V64A8,8,0,0,0,176,56ZM128,200a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V208A8,8,0,0,0,128,200Zm0-120a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,128,80ZM80,56a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0V64A8,8,0,0,0,80,56Zm96,72a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0V136A8,8,0,0,0,176,128ZM32,104a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,32,104Zm48,48a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V160A8,8,0,0,0,80,152Zm144-48a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,224,104Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhGooglePodcastsLogo;
