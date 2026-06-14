import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-django-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevDjangoIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-django-icon-1-a)"}],["path",{"fill":"currentColor","d":"M534.4 0H65.6A65.6 65.6 0 0 0 0 65.6v468.8A65.6 65.6 0 0 0 65.6 600h468.8a65.6 65.6 0 0 0 65.6-65.6V65.6A65.6 65.6 0 0 0 534.4 0"}],["path",{"fill":"currentColor","d":"M436.8 220.8V376c0 53.5-3.9 79.1-15.6 101.3-10.9 21.3-25.3 34.8-54.8 49.6l-62.2-29.6c29.6-14 44-26 53-44.8 9.6-19.1 12.7-41.3 12.7-99.5V220.8zM330.3 117.4v310a442 442 0 0 1-87 9c-81.7 0-124.3-37-124.3-107.8 0-68.3 45.2-112.6 115.2-112.6 10.9 0 19.10.9 29.1 3.5V117.4zm-89.6 152.5c-33.9 0-53.4 20.9-53.4 57.4 0 35.7 18.6 55.2 53 55.2 7.4 0 13.5-0.4 23-1.7V273.4a67 67 0 0 0-22.6-3.5m196.1-152.2v68.7h-67v-68.7z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevDjangoIcon;
